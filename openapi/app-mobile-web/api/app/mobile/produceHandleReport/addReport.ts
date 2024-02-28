import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:17400/doc.html#/default/上报反馈服务相关/addReportUsingPOST
*/
export default function fetchMethod(options: { data: IReportTheFeedbackProcessingDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-mobile-web/api/app/mobile/produceHandleReport/addReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 上报反馈处理DTO */
export interface IReportTheFeedbackProcessingDTO {
    /** 生产任务id，任务外的上报反馈可不传 */
    produceTaskId: string;
    /** 生产异常类型id */
    produceAbnormalCategoryId: string;
    /** 标签id集合 */
    tagIds?: string[];
    /** 图片key集合 */
    imageKeys?: string[];
    /** 描述 */
    description?: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
