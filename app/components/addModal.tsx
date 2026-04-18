
import ModalForm from "./ModalForm";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fetchData: () => Promise<void>;

};

export default function AddJobModal({ isModalOpen, setIsModalOpen, fetchData }: Props) {
  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-60  flex items-center justify-center bg-zinc-950/45 backdrop-blur-xs px-4 py-6"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="relative max-h-full w-full max-w-2xl overflow-y-auto rounded-[12px] border border-border bg-surface p-5 text-foreground-1 z-60"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalForm setIsModalOpen={setIsModalOpen} fetchData={fetchData} />

       
      </div>
    </div>
  );
}
