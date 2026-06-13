import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Horse } from "@/lib/horses";

type CartContextValue = {
  items: Horse[];
  ids: Set<string>;
  add: (horse: Horse) => void;
  remove: (id: string) => void;
  clear: () => void;
  has: (id: string) => boolean;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Horse[]>([]);
  const [open, setOpen] = useState(false);

  const add = useCallback((horse: Horse) => {
    setItems((prev) =>
      prev.find((h) => h.id === horse.id) ? prev : [...prev, horse],
    );
    setOpen(true);
  }, []);
  const remove = useCallback(
    (id: string) => setItems((prev) => prev.filter((h) => h.id !== id)),
    [],
  );
  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => {
    const ids = new Set(items.map((h) => h.id));
    return {
      items,
      ids,
      add,
      remove,
      clear,
      has: (id) => ids.has(id),
      open,
      setOpen,
    };
  }, [items, add, remove, clear, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
