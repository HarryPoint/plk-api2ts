import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/ 企业迁移脚本相关/migrateEnterpriseUsingPOST
*/
export default function fetchMethod(options: { data: IEnterpriseMigrateRequestDTO[] }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/script/migrateEnterprise",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** EnterpriseMigrateRequestDTO */
export interface IEnterpriseMigrateRequestDTO {
    /** undefined */
    id: number;
    /** undefined */
    code: string;
    /** undefined */
    name: string;
    /** undefined */
    defaultAccountCount?: number;
    /** undefined */
    usedAccountQuantity?: number;
    /** undefined */
    expireTime: string;
    /** undefined */
    isEnableBatchManagement?: string;
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
    ts?: number;
}
