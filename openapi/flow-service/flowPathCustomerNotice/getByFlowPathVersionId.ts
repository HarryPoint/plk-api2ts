import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程自定义字段相关/getByFlowPathVersionIdUsingPOST
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; flowPathVersionId?: string } }, extraOptions?: any) {
    return http<ITheJSONResultListProcessCustomNotificationFieldRespondsToVO>(
        {
            url: "/flow-service/flowPathCustomerNotice/getByFlowPathVersionId",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«流程自定义通知字段响应VO»» */
export interface ITheJSONResultListProcessCustomNotificationFieldRespondsToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProcessCustomNotificationFieldRespondsToVO1[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 流程自定义通知字段响应VO_1 */
export interface ITheProcessCustomNotificationFieldRespondsToVO1 {
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 所属流程id */
    flowPathId?: string;
    /** 所属流程版本id */
    flowPathVersionId?: string;
    /** 流程版本号 */
    flowPathVersionRank?: number;
    /** 关联字段SerialNo */
    flowPathFormFieldSerialNo?: string;
}
