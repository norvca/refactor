function disabilityAmount(anEmployee) {
  if (isNotEligiableForDisability()) return 0;

  // compute the disability amount...
}

function isNotEligiableForDisability() {
  return (
    anEmployee.seniority < 2 ||
    anEmployee.monthsDisabled > 12 ||
    anEmployee.isPartTime
  );
}
