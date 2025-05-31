import { useContext } from 'react';
import { MovieContext } from '../../context/movieContext';
import { toast } from 'react-toastify';
import ModalPortal from '../../utils/portal';

export default function ModalDetail() {
  const { modalOpen, setModalOpen, movieVideo } = useContext(MovieContext);
  const trailer = movieVideo?.results[0]?.key;

  const handleToggleModal = () => {
    if (!trailer) {
      toast.info('트레일러 없음');
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
        <ModalPortal>
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setModalOpen(false)}>
            <dialog
              open
              className="bg-gray-900 text-white rounded-lg shadow-2xl p-6 relative
                      max-w-3xl w-full mx-auto md:max-w-4xl lg:max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl font-bold cursor-pointer"
                onClick={() => {
                  setModalOpen(false);
                }}
                aria-label="모달 닫기"
              >
                &times;
              </button>

              <div className="mt-8 mb-4">
                {' '}
                <iframe
                  src={`https://www.youtube.com/embed/${trailer}`}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-72 rounded-lg aspect-video"
                ></iframe>
              </div>
            </dialog>
          </div>
        </ModalPortal>
      )}
    </>
  );
}
