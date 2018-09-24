import { NgModule } from '@angular/core';

import { TrygTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TrygTestSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TrygTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TrygTestSharedCommonModule {}
