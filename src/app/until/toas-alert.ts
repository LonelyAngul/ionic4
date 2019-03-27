import { Injectable } from '@angular/core';
import { ToastController, AlertController, LoadingController } from "@ionic/angular";

@Injectable()
export class ToasAlert {
    //自己定义的三种消息框样式
    errorCss:string = 'errorToast';
    generalCss:string = 'generalToast';
    successCss:string = 'successToast';
    loading: any;
    constructor(
        public toastCtrl: ToastController,
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController
    ) { }

    /**
    * 错误信息提示框
    * @param message 消息
    */
    public errorToast(message: any, duraction?: number) {
        this.showToast(message, duraction, this.errorCss);
    }

    /**
     * 普通信息提示框
     * @param message 消息
     */
    public generalToast(message: any, duraction: number) {
        this.showToast(message, duraction, this.generalCss);
    }

    /**
     * 成功信息提示框
     * @param message
     */
    public successToast(message: any, duraction: number) {
        this.showToast(message, duraction, this.successCss);
    }

    /**
   *
   * @param message需要展示的信息
   * @param css 自定义的背景颜色
   */
    private async showToast(msg: string, duration: number, css: string) {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: duration,
            position: 'top',
            cssClass: css,
            animated: true,
        });
        toast.onDidDismiss();
        toast.present();
    }

    //全局的loading
    public async ShowLoading(msg: string = '',duration?: number) {
        this.loading = await this.loadingCtrl.create({
            message: msg + '...',
            duration:duration
        });
        return this.loading.present();
    }

    /**
   * [确认框]
   * @param {string}    msg [消息]
   * @param {string}    header   [标题]
   * @param {any[]) =>      void}        confirmHandler [确认操作]
   * @param confirmText  confirmText[确定键的文字]
   * @param {any[]) =>      void}        cancelHandler  [取消操作]
   */
    public async presentAlert(msg: string, header?: string, confirmText?: string, confirmHandler?: (...args: any[]) => void, cancelHandler?: (...args: any[]) => void) {
        const alert = await this.alertCtrl.create({
            header: header ? header : "提示",
            message: msg,
            buttons: [
                {
                    text: "取消",
                    role: "cancel",
                    handler: () => {
                        if (cancelHandler) cancelHandler();
                    }
                },
                {
                    text: confirmText || "确定",
                    handler: () => {
                        if (confirmHandler) confirmHandler();
                    }
                }
            ],
            cssClass: "alert"
        });

        await alert.present();
    }
}
