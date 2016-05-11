import { GulpTask } from 'gulp-core-build';
import gulpType = require('gulp');

const gulpScssLint = require('gulp-scss-lint');

export interface ISassLintTaskConfig {
  sassMatch?: string[];
}

export class SassLintTask extends GulpTask<ISassLintTaskConfig> {
  public taskConfig: ISassLintTaskConfig = {
    sassMatch: [
      'src/**/*.scss'
    ]
  };

  public executeTask(gulp: gulpType.Gulp): NodeJS.ReadWriteStream {
    return gulp.src(this.taskConfig.sassMatch)
      .pipe(gulpScssLint());
  }
}