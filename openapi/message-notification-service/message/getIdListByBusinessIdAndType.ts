import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:17600/doc.html#/default/消息相关/getIdListByBusinessIdAndTypeUsingPOST
*/
export default function fetchMethod(options: { data: IMessageQueryDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListlong>(
        {
            url: "/message-notification-service/message/getIdListByBusinessIdAndType",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 消息查询DTO */
export interface IMessageQueryDTO {
    /** 业务类型 */
    businessType?: EMessageQueryDTO_businessType;
    /** 业务id */
    businessIds?: string[];
}
/** JSONResult«List«long»» */
export interface IJSONResultListlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EMessageQueryDTO_businessType {
    /** 生产任务 */
    PRODUCE_TASK = "PRODUCE_TASK"
}
