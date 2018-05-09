export const getLoggedInStateFromLocalStorage = () => {
  return (
    // tslint:disable-next-line:no-any
    typeof (window as any) !== "undefined" &&
    // tslint:disable-next-line:no-any
    (window.localStorage as any) !== undefined &&
    window.localStorage.getItem("is-logged-in") !== null
  );
};
