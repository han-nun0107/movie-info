import { useContext } from "react";
import { MovieContext } from "../../context/movieContext";
import { toast } from "react-toastify";

export default function ModalDetail() {
  const { modalOpen, setModalOpen, movieVideo } = useContext(MovieContext);
  const trailer = movieVideo?.results[0]?.key;

  const handleToggleModal = () => {
    if (!trailer) {
      toast.info("트레일러 없음");
      return;
    }
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <button
        className="cursor-pointer bg-red-500 rounded-2xl text-[#fafaf8] w-[120px] h-10 hover:bg-red-600 active:bg-red-700"
        onClick={handleToggleModal}
      >
        트레일러 재생
      </button>

      {modalOpen && (
        <div>
          <div>
            <button
              className="cursor-pointer"
              onClick={() => {
                setModalOpen(false);
              }}
            >
              X
            </button>

            <div>
              <iframe
                src={`https://www.youtube.com/embed/${trailer}`}
                frameborder="0"
                allowFullScreen
                className="w-full h-72 rounded"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
