// Minimal jsPsych test trial
const trial = {
  type: 'html-keyboard-response',
  stimulus: '<p>Press any key to continue!</p>',
};

initJsPsych({
  timeline: [trial]
});
