import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:18100/doc.html#/default/ 企业迁移脚本相关/migrateEnterpriseUsingPOST
*/
export default function fetchMethod(options: { data: IEnterpriseMigrateRequestDTO[] }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/script/migrateEnterprise",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** EnterpriseMigrateRequestDTO */
export interface IEnterpriseMigrateRequestDTO {
    /** undefined */
    accessKey?: string;
    /** undefined */
    accessSecret?: string;
    /** undefined */
    code: string;
    /** undefined */
    defaultAccountCount?: number;
    /** undefined */
    expireTime: number;
    /** undefined */
    id: string;
    /** undefined */
    isEnableBatchManagement?: EEnterpriseMigrateRequestDTO_isEnableBatchManagement;
    /** undefined */
    name: string;
    /** undefined */
    usedAccountQuantity?: number;
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

export enum EEnterpriseMigrateRequestDTO_isEnableBatchManagement {
    Y = "Y",
    N = "N"
}
