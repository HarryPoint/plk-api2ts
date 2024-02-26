import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17600/doc.html#/default/邮件任务/addUsingPOST_2
*/
export default function fetchMethod(options: { data: IEmailTaskAddRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/message-notification-service/emailTask/add",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** EmailTaskAddRequestDTO */
export interface IEmailTaskAddRequestDTO {
    /** 邮件名称 */
    emailName?: string;
    /** 收件人 */
    addressee?: string;
    /** 标题 */
    title?: string;
    /** 邮件正文 */
    content?: string;
    /** 发送模式 */
    sendingMode?: ('SINGLE' | 'MULTIPLE');
    /** 发送时间 */
    sendingTime?: string;
    /** 下次发送时间 */
    nextSendingTime?: string;
    /** 上次发送时间 */
    lastSendingTime?: string;
    /** 附件配置列表 */
    attachmentConfigList?: IEmailTaskAttachmentConfigAddRequestDTO[];
    /** 邮件状态 */
    status?: ('IN_ACTIVE' | 'DEACTIVATED' | 'COMPLETED');
    /** 发送时间配置 */
    sendingTimeConfig?: ISendingTimeConfigAddRequestDTO;
    /** 创建用户名 */
    createUserName?: string;
    /** 更新用户名 */
    updateUserName?: string;
    /** 创建部门名 */
    createDeptName?: string;
    /** 更新部门名 */
    updateDeptName?: string;
}
/** EmailTaskAttachmentConfigAddRequestDTO */
export interface IEmailTaskAttachmentConfigAddRequestDTO {
    /** 其他对象引用ID */
    refId?: number;
    /** 文件类型 */
    fileType?: string;
}
/** SendingTimeConfigAddRequestDTO */
export interface ISendingTimeConfigAddRequestDTO {
    /** 时间模式 */
    timeMode?: ('DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'HALF_YEAR' | 'YEAR');
    /** 周号 */
    weekNo?: number;
    /** 每月的计时模式 */
    monthCalcTimeMode?: ('FROM_BEGINNING_OF_MONTH' | 'FROM_END_OF_MONTH');
    /** 第几天 */
    day?: number;
    /** 季度计时模式 */
    quarterCalcTimeMode?: ('FROM_BEGINNING_OF_QUARTER' | 'FROM_END_OF_QUARTER');
    /** 每天第几天 */
    month?: number;
    /** 时间 */
    time?: string;
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ('Y' | 'N');
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
