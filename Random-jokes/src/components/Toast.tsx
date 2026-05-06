function Toast({ message }: { message: string }) {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/10 bg-[#353534]/95 px-5 py-3 text-sm text-[#faf9f6] backdrop-blur-xl animate-[toastIn_0.3s_ease]">
      {message}
    </div>
  );
}

export default Toast;
