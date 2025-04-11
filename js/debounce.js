export const debounce = function (callee, timeoutMs) {
  return function perform(...args) {
    let prevCall = this.lastCall;
    this.lastCall = Date.now;
    if (prevCall && this.lastCall - prevCall <= timeoutMs) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  };
};
