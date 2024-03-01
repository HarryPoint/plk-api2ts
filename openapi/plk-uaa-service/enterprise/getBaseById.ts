import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/企业客户相关/getBaseByIdUsingPOST
*/
export default function fetchMethod(options: { data: IIdInformation1 }, extraOptions?: any) {
    return http<IJSONResultEnterpriseResponseObject>(
        {
            url: "/plk-uaa-service/enterprise/getBaseById",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** Id 信息_1 */
export interface IIdInformation1 {
    /** id */
    id: string;
}
/** JSONResult«企业响应对象» */
export interface IJSONResultEnterpriseResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IEnterpriseResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 企业响应对象 */
export interface IEnterpriseResponseObject {
    /** 企业编号 */
    code?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人名称 */
    createUsername?: string;
    /** 数据状态 */
    dataStatus?: number;
    /** id */
    id?: string;
    /** 是否启用批次关联 */
    isEnableBatchManagement?: EEnterpriseResponseObject_isEnableBatchManagement;
    /** 企业名 */
    name?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新人id */
    updateUserId?: string;
    /** 更新人名称 */
    updateUsername?: string;
}

export enum EEnterpriseResponseObject_isEnableBatchManagement {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
