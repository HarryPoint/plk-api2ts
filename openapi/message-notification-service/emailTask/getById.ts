import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:17600/doc.html#/default/邮件任务/getByIdUsingPOST
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultEmailTaskDTO>(
        {
            url: "/message-notification-service/emailTask/getById",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«EmailTaskDTO» */
export interface IJSONResultEmailTaskDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IEmailTaskDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** EmailTaskDTO */
export interface IEmailTaskDTO {
    /** ID */
    id?: string;
    /** 邮件名称 */
    emailName?: string;
    /** 收件人 */
    addressee?: string;
    /** 标题 */
    title?: string;
    /** 邮件正文 */
    content?: string;
    /** 发送模式 */
    sendingMode?: EEmailTaskDTO_sendingMode;
    /** 发送时间 */
    sendingTime?: number;
    /** 下次发送时间 */
    nextSendingTime?: number;
    /** 上次发送时间 */
    lastSendingTime?: number;
    /** 附件配置列表 */
    attachmentConfigList?: IEmailTaskAttachmentConfigDTO[];
    /** 邮件状态 */
    status?: EEmailTaskDTO_status;
    /** 发送时间配置 */
    sendingTimeConfig?: ISendingTimeConfigDTO;
    /** 创建用户名 */
    createUserName?: string;
    /** 更新用户名 */
    updateUserName?: string;
    /** 创建部门名 */
    createDeptName?: string;
    /** 更新部门名 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 更新时间 */
    updateTime?: number;
}
/** EmailTaskAttachmentConfigDTO */
export interface IEmailTaskAttachmentConfigDTO {
    /** ID */
    id?: string;
    /** 其他对象引用ID */
    refId?: string;
    /** 文件类型 */
    fileType?: string;
}
/** SendingTimeConfigDTO */
export interface ISendingTimeConfigDTO {
    /** ID */
    id?: string;
    /** 时间模式 */
    timeMode?: ESendingTimeConfigDTO_timeMode;
    /** 周号 */
    weekNo?: number;
    /** 每月的计时模式 */
    monthCalcTimeMode?: ESendingTimeConfigDTO_monthCalcTimeMode;
    /** 第几天 */
    day?: number;
    /** 季度计时模式 */
    quarterCalcTimeMode?: ESendingTimeConfigDTO_quarterCalcTimeMode;
    /** 每天第几天 */
    month?: number;
    /** 时间 */
    time?: string;
}

export enum EEmailTaskDTO_sendingMode {
    /** 单次 */
    SINGLE = "SINGLE",
    /** 多次 */
    MULTIPLE = "MULTIPLE"
}

export enum EEmailTaskDTO_status {
    /** 生效中 */
    IN_ACTIVE = "IN_ACTIVE",
    /** 已停用 */
    DEACTIVATED = "DEACTIVATED",
    /** 已完成 */
    COMPLETED = "COMPLETED"
}

export enum ESendingTimeConfigDTO_timeMode {
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

export enum ESendingTimeConfigDTO_monthCalcTimeMode {
    /** 从月初开始计算 */
    FROM_BEGINNING_OF_MONTH = "FROM_BEGINNING_OF_MONTH",
    /** 从月末开始 */
    FROM_END_OF_MONTH = "FROM_END_OF_MONTH"
}

export enum ESendingTimeConfigDTO_quarterCalcTimeMode {
    /** 从季度初第 */
    FROM_BEGINNING_OF_QUARTER = "FROM_BEGINNING_OF_QUARTER",
    /** 从月末倒数第 */
    FROM_END_OF_QUARTER = "FROM_END_OF_QUARTER"
}
