import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/安全库存相关/exchangeSettingUsingPOST
*/
export default function fetchMethod(options: { data: IUnifiedSecurityInventoryConfiguration }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/safetyStock/exchangeSetting",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 安全库存统一设置配置 */
export interface IUnifiedSecurityInventoryConfiguration {
    /** 设置类型 */
    type: EUnifiedSecurityInventoryConfiguration_type;
    /** 对应业务id */
    businessId?: string;
    /** 是否开启预警 */
    isWarning?: EUnifiedSecurityInventoryConfiguration_isWarning;
    /** 计数方式 */
    computeType?: EUnifiedSecurityInventoryConfiguration_computeType;
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

export enum EUnifiedSecurityInventoryConfiguration_type {
    /** 全工厂 */
    ALL = "ALL",
    /** 区域 */
    AREA = "AREA",
    /** 仓库 */
    STOREHOUSE = "STOREHOUSE",
    /** 仓位 */
    WAREHOUSE = "WAREHOUSE"
}

export enum EUnifiedSecurityInventoryConfiguration_isWarning {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EUnifiedSecurityInventoryConfiguration_computeType {
    /** 按总库存计算 */
    TOTAL = "TOTAL",
    /** 按可用库存计算 */
    CAN_USE = "CAN_USE"
}
