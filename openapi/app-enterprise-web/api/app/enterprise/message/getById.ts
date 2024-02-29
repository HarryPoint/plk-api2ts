import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/消息相关/getByIdUsingGET_10
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultMessageDetailsAreReturnedToVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/message/getById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«消息详情返回VO» */
export interface IJSONResultMessageDetailsAreReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IMessageDetailsAreReturnedToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 消息详情返回VO */
export interface IMessageDetailsAreReturnedToVO {
    /** id */
    id?: string;
    /** 消息类型 */
    type?: EMessageDetailsAreReturnedToVO_type;
    /** 消息类型描述 */
    typeDesc?: string;
    /** 消息标题 */
    title?: string;
    /** 消息摘要 */
    digest?: string;
    /** 消息内容 */
    content?: string;
    /** 消息图片key集 */
    imageKeys?: Record<string, any>[];
    /** 消息图片url集 */
    imageUrls?: string[];
    /** 是否已读 */
    isRead?: EMessageDetailsAreReturnedToVO_isRead;
    /** pc端跳转路径 */
    webPath?: string;
    /** pc端操作建议 */
    webOpRecommend?: string;
    /** 移动端跳转路径 */
    mobilePath?: string;
    /** 移动端操作建议 */
    mobileOpRecommend?: string;
    /** 创建时间 */
    createTime?: number;
    /** 消息发送类型 */
    sendType?: EMessageDetailsAreReturnedToVO_sendType;
    /** 消息发送类型描述 */
    sendTypeDesc?: string;
    /** 消息跳转类型 */
    pathType?: EMessageDetailsAreReturnedToVO_pathType;
    /** 消息跳转类型描述 */
    pathTypeDesc?: string;
}

export enum EMessageDetailsAreReturnedToVO_type {
    /** 业务通知 */
    BUSINESS_NOTIFICATION = "BUSINESS_NOTIFICATION",
    /** 业务预警 */
    BUSINESS_EARLY_WARNING = "BUSINESS_EARLY_WARNING",
    /** 系统消息 */
    SYSTEM_NOTIFICATION = "SYSTEM_NOTIFICATION"
}

export enum EMessageDetailsAreReturnedToVO_isRead {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMessageDetailsAreReturnedToVO_sendType {
    /** 普通消息 */
    NORMAL = "NORMAL",
    /** 抄送消息 */
    CARBON_COPY = "CARBON_COPY"
}

export enum EMessageDetailsAreReturnedToVO_pathType {
    /** 无操作 */
    NONE = "NONE",
    /** 跳转 */
    JUMP = "JUMP",
    /** 下载 */
    DOWNLOAD = "DOWNLOAD",
    /** 重新导出 */
    REEXPORT = "REEXPORT",
    /** 代办 */
    TODO = "TODO",
    /** 应用新增页面链接 */
    APP_ADD_PAGE_LINK = "APP_ADD_PAGE_LINK",
    /** 应用详细页面链接 */
    APP_LIST_PAGE_LINK = "APP_LIST_PAGE_LINK"
}
