import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/费用分配相关/checkProduceFeeAssignHasModifyUsingGET
*/
export default function fetchMethod(options: { params: { fiscalPeriodId?: string } }, extraOptions?: any) {
    return http<IJSONResultVerifiesTheResponseObject>(
        {
            url: "/masterdata-service/produceFeeAssign/checkProduceFeeAssignHasModify",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«校验响应对象» */
export interface IJSONResultVerifiesTheResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ICheckResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 校验响应对象 */
export interface ICheckResponseObject {
    /** 是否已创建, 当返回值为Y时, 已创建; 为N时, 没有创建 */
    isCreated?: ECheckResponseObject_isCreated;
    /** 是否变更过, 当返回值为Y时, 有变动; 为N时, 没有变动 */
    isModify?: ECheckResponseObject_isModify;
}

export enum ECheckResponseObject_isCreated {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ECheckResponseObject_isModify {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
