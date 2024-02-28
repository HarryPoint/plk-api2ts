import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:18100/doc.html#/default/ 企业迁移脚本相关/migrateEnterpriseUsingPOST
*/
export default function fetchMethod(options: { data: IEnterpriseMigrateRequestDTO[] }, extraOptions?: any) {
    return http<IJSONResultobject>(
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
    id: string;
    /** undefined */
    code: string;
    /** undefined */
    name: string;
    /** undefined */
    defaultAccountCount?: number;
    /** undefined */
    usedAccountQuantity?: number;
    /** undefined */
    expireTime: number;
    /** undefined */
    isEnableBatchManagement?: EEnterpriseMigrateRequestDTO_isEnableBatchManagement;
    /** undefined */
    accessKey?: string;
    /** undefined */
    accessSecret?: string;
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

export enum EEnterpriseMigrateRequestDTO_isEnableBatchManagement {
    Y = "Y",
    N = "N"
}
