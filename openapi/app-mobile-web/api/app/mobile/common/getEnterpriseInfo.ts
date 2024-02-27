import { http } from "@/api/http";

/**
* @link http://47.108.139.107:17400/doc.html#/default/公共相关/getEnterpriseInfoUsingPOST
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultEnterpriseResponseObject>(
        {
            url: "/app-mobile-web/api/app/mobile/common/getEnterpriseInfo",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«企业响应对象» */
export interface IJSONResultEnterpriseResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IEnterpriseResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 企业响应对象 */
export interface IEnterpriseResponseObject {
    /** 数据状态 */
    dataStatus?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人名称 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: number;
    /** 更新人id */
    updateUserId?: string;
    /** 更新人名称 */
    updateUsername?: string;
    /** 更新时间 */
    updateTime?: number;
    /** id */
    id?: string;
    /** 企业编号 */
    code?: string;
    /** 企业名 */
    name?: string;
    /** 是否启用批次关联 */
    isEnableBatchManagement?: EEnterpriseResponseObject_isEnableBatchManagement;
}

export enum EEnterpriseResponseObject_isEnableBatchManagement {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
