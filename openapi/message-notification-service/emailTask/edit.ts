import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17600/doc.html#/default/邮件任务/editUsingPOST_2
*/
export default function fetchMethod(options: { data: IEmailTaskEditRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/message-notification-service/emailTask/edit",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** EmailTaskEditRequestDTO */
export interface IEmailTaskEditRequestDTO {
    /** ID */
    id?: number;
    /** 邮件名称 */
    emailName?: string;
    /** 收件人 */
    addressee?: string;
    /** 标题 */
    title?: string;
    /** 邮件正文 */
    content?: string;
    /** 发送模式 */
    sendingMode?: EEmailTaskEditRequestDTO_sendingMode;
    /** 发送时间 */
    sendingTime?: string;
    /** 下次发送时间 */
    nextSendingTime?: string;
    /** 上次发送时间 */
    lastSendingTime?: string;
    /** 邮件任务配置列表 */
    attachmentConfigList?: IEmailTaskAttachmentConfigEditRequestDTO[];
    /** 邮件状态 */
    status?: EEmailTaskEditRequestDTO_status;
    /** 发送时间配置 */
    sendingTimeConfig?: ISendingTimeConfigEditRequestDTO;
    /** 创建用户名 */
    createUserName?: string;
    /** 更新用户名 */
    updateUserName?: string;
    /** 创建部门名 */
    createDeptName?: string;
    /** 更新部门名 */
    updateDeptName?: string;
}
/** EmailTaskAttachmentConfigEditRequestDTO */
export interface IEmailTaskAttachmentConfigEditRequestDTO {
    /** ID */
    id?: number;
    /** 其他对象引用ID */
    refId?: number;
    /** 文件类型 */
    fileType?: string;
}
/** SendingTimeConfigEditRequestDTO */
export interface ISendingTimeConfigEditRequestDTO {
    /** ID */
    id?: number;
    /** 时间模式 */
    timeMode?: ESendingTimeConfigEditRequestDTO_timeMode;
    /** 周号 */
    weekNo?: number;
    /** 每月的计时模式 */
    monthCalcTimeMode?: ESendingTimeConfigEditRequestDTO_monthCalcTimeMode;
    /** 第几天 */
    day?: number;
    /** 季度计时模式 */
    quarterCalcTimeMode?: ESendingTimeConfigEditRequestDTO_quarterCalcTimeMode;
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
    data?: EJSONResultstring_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

export enum EEmailTaskEditRequestDTO_sendingMode {
    /** 单次 */
    SINGLE = "SINGLE",
    /** 多次 */
    MULTIPLE = "MULTIPLE"
}

export enum EEmailTaskEditRequestDTO_status {
    /** 生效中 */
    IN_ACTIVE = "IN_ACTIVE",
    /** 已停用 */
    DEACTIVATED = "DEACTIVATED",
    /** 已完成 */
    COMPLETED = "COMPLETED"
}

export enum ESendingTimeConfigEditRequestDTO_timeMode {
    /** 每天 */
    DAY = "DAY",
    /** 每周 */
    WEEK = "WEEK",
    /** 每月 */
    MONTH = "MONTH",
    /** 每季度 */
    QUARTER = "QUARTER",
    /** 每半年 */
    HALF_YEAR = "HALF_YEAR",
    /** 每年 */
    YEAR = "YEAR"
}

export enum ESendingTimeConfigEditRequestDTO_monthCalcTimeMode {
    /** 从月初开始计算 */
    FROM_BEGINNING_OF_MONTH = "FROM_BEGINNING_OF_MONTH",
    /** 从月末开始 */
    FROM_END_OF_MONTH = "FROM_END_OF_MONTH"
}

export enum ESendingTimeConfigEditRequestDTO_quarterCalcTimeMode {
    /** 从季度初第 */
    FROM_BEGINNING_OF_QUARTER = "FROM_BEGINNING_OF_QUARTER",
    /** 从月末倒数第 */
    FROM_END_OF_QUARTER = "FROM_END_OF_QUARTER"
}

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}
