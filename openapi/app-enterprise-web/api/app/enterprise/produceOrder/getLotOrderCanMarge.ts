import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产订单相关/getLotOrderCanMargeUsingPOST_1
*/
export default function fetchMethod(options: { data: IBatchOrderVerificationCanMergeSearchVO }, extraOptions?: any) {
    return http<IJSONResultIndicatesWhetherTheInformationIsDisplayed>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrder/getLotOrderCanMarge",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 批次订单校验能否合并搜索VO */
export interface IBatchOrderVerificationCanMergeSearchVO {
    /** 批次id集 */
    lotOrderIds?: string[];
}
/** JSONResult«是否信息» */
export interface IJSONResultIndicatesWhetherTheInformationIsDisplayed {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IYesNoMessage;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 是否信息 */
export interface IYesNoMessage {
    /** 是否 */
    whether?: EYesNoMessage_whether;
}

export enum EYesNoMessage_whether {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
