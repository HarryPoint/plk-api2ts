import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/企业客户相关/modifyBatchManagementUsingPOST
*/
export default function fetchMethod(options: { data: IExampleModifyTheEnterpriseBatchManagementInformationRequestObject }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/enterprise/modifyBatchManagement",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 修改企业批次管理信息请求对象 */
export interface IExampleModifyTheEnterpriseBatchManagementInformationRequestObject {
    /** 企业id */
    id?: string;
    /** 是否启用批次关联 */
    isEnableBatchManagement?: EExampleModifyTheEnterpriseBatchManagementInformationRequestObject_isEnableBatchManagement;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EExampleModifyTheEnterpriseBatchManagementInformationRequestObject_isEnableBatchManagement {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
