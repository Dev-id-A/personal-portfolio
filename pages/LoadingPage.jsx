function LoadingPage() {
  return (
    <main className="flex justify-center items-center h-screen w-screen">

    <style>{`
    @keyframes loadingAnimation{
      0% {
        transform: scale(1);
        filter: drop-shadow(0 0 30px #48D1CC);
        opacity 0.5;
      }       
      50% {
        transform: scale(1.2);
        filter: drop-shadow(0 0 50px #48D1CC);
        opacity: 1
      }
      100% {
        transform: scale(1);
        filter: drop-shadow(0 0 30px #48D1CC);
        opacity: 0.5;
      }
    }

    .loading-animation {
        animation: loadingAnimation 2s ease-in-out infinite;
      }`}</style>

        <img src="/dev-id-logo.svg" alt="Dev-id-logo" 
        className="size-50 sm:size-100 drop-shadow-[0_0_30px_#48D1CC] loading-animation" />
    </main>
  )
}

export default LoadingPage