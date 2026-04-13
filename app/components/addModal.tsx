
import { Button } from "@/components/ui/button";
import ModalForm from "./ModalForm";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AddJobModal({ isModalOpen, setIsModalOpen }: Props) {
  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60]  flex items-center justify-center bg-zinc-950/45 backdrop-blur-xs px-4 py-6"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="relative max-h-full w-full max-w-2xl overflow-y-auto rounded-[12px] border border-border bg-surface p-5 text-foreground-1 z-[60]"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalForm setIsModalOpen={setIsModalOpen} />

        <div className="pt-10 flex justify-end gap-4">
          <Button
            className="px-9 py-6 text-foreground-1 bg-surface border border-border cursor-pointer hover:bg-surface-muted"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button className="px-10 py-6 bg-foreground-1 text-background cursor-pointer hover:bg-foreground-2 font-[700]">
            + Add Job
          </Button>
        </div>
      </div>
    </div>
  );
}
