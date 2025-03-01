export function handleBack(router: { push: (url: string) => void; back: () => void }) {
    if (typeof window !== 'undefined') {
        console.log(window.history)
        // return
      // If there is a history entry, go back
      if (window.history.length > 1) {
        router.back();
      } else {
        // Otherwise, navigate to the home page
        router.push('/');
      }
    } else {
      // Fallback for non-browser environments (shouldn't happen in client code)
      router.push('/');
    }
  }
  