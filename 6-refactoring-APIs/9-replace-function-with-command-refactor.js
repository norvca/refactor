// 重构目的：有时复杂的独立函数读起来很费力，我们也可以将其封装成一个类，把其中的逻辑进而封装成类的对象，增加可读性，用增加嵌套函数的方法也可以，但是类的对象更容易测试和调试

function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

class Score {
  constructor(candidate, medicalExam, scoringGuide) {
    this.candidate = candidate;
    this.medicalExam = medicalExam;
    this.scoringGuide = scoringGuide;
  }

  execute() {
    this.result = 0;
    this.healthLevel = 0;
    this.highMedicalRiskFlag = false;

    this.scoreSmoking();
    this.certificationGrade = 'regular';
    this.lowCertification();

    // lots more code like this
    this.result -= Math.max(this.healthLevel - 5, 0);
    return this.result;
  }

  scoreSmoking() {
    if (this.medicalExam.isSmoker) {
      this.healthLevel += 10;
      this.highMedicalRiskFlag = true;
    }
  }

  lowCertification() {
    if (
      this.scoringGuide.stateWithLowCertification(this.candidate.originState)
    ) {
      this.certificationGrade = 'low';
      this.result -= 5;
    }
  }
}
