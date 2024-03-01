import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/安全库存相关/exchangeSettingUsingPOST
*/
export default function fetchMethod(options: { data: IUnifiedSecurityInventoryConfiguration, params: { EnterpriseId?: string; UserId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/safetyStock/exchangeSetting",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 安全库存统一设置配置 */
export interface IUnifiedSecurityInventoryConfiguration {
    /** 对应业务id */
    businessId?: string;
    /** 计数方式 */
    computeType?: EUnifiedSecurityInventoryConfiguration_computeType;
    /** 是否开启预警 */
    isWarning?: EUnifiedSecurityInventoryConfiguration_isWarning;
    /** 设置类型 */
    type: EUnifiedSecurityInventoryConfiguration_type;
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

export enum EUnifiedSecurityInventoryConfiguration_computeType {
    /** 按总库存计算 */
    TOTAL = "TOTAL",
    /** 按可用库存计算 */
    CAN_USE = "CAN_USE"
}

export enum EUnifiedSecurityInventoryConfiguration_isWarning {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
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
