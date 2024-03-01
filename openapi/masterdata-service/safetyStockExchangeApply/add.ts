import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/安全库存变更申请相关/addUsingPOST_7
*/
export default function fetchMethod(options: { data: ISecurityInventoryChangeRequestConfiguration, params: { enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/safetyStockExchangeApply/add",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 安全库存变更申请配置 */
export interface ISecurityInventoryChangeRequestConfiguration {
    /** 申请单号 */
    applyNo?: string;
    /** 对应业务id */
    businessId?: string;
    /** 是否应用编码规则 */
    isCodeRule?: ESecurityInventoryChangeRequestConfiguration_isCodeRule;
    /** 安全库存下限 */
    lowerLimit?: number;
    /** 物料id */
    materialId?: string;
    /** 采购触发下限 */
    purchaseLowerLimit?: number;
    /** 通知类型 */
    sendType?: ESecurityInventoryChangeRequestConfiguration_sendType;
    /** 通知人id集 */
    sendUserIds?: string[];
    /** 设置类型 */
    type: ESecurityInventoryChangeRequestConfiguration_type;
    /** 安全库存上限 */
    upperLimit?: number;
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

export enum ESecurityInventoryChangeRequestConfiguration_isCodeRule {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESecurityInventoryChangeRequestConfiguration_sendType {
    /** 应用内消息 */
    MESSAGE = "MESSAGE"
}

export enum ESecurityInventoryChangeRequestConfiguration_type {
    /** 全工厂 */
    ALL = "ALL",
    /** 区域 */
    AREA = "AREA",
    /** 仓库 */
    STOREHOUSE = "STOREHOUSE",
    /** 仓位 */
    WAREHOUSE = "WAREHOUSE"
}
