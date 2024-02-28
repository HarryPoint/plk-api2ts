import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/安全库存相关/getSettingInfoUsingPOST
*/
export default function fetchMethod(options: { data: ISecurityStockSettingsSearchVO }, extraOptions?: any) {
    return http<IJSONResultSecurityStockSettingsReturnVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/safetyStock/getSettingInfo",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 安全库存设置搜索VO */
export interface ISecurityStockSettingsSearchVO {
    /** 设置类型 */
    type: ESecurityStockSettingsSearchVO_type;
    /** 对应业务id */
    businessId?: string;
}
/** JSONResult«安全库存设置返回VO» */
export interface IJSONResultSecurityStockSettingsReturnVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ISafetyStockSettingsReturnVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 安全库存设置返回VO */
export interface ISafetyStockSettingsReturnVO {
    /** 是否开启预警 */
    isWarning?: ESafetyStockSettingsReturnVO_isWarning;
    /** 计数方式 */
    computeType?: ESafetyStockSettingsReturnVO_computeType;
}

export enum ESecurityStockSettingsSearchVO_type {
    /** 全工厂 */
    ALL = "ALL",
    /** 区域 */
    AREA = "AREA",
    /** 仓库 */
    STOREHOUSE = "STOREHOUSE",
    /** 仓位 */
    WAREHOUSE = "WAREHOUSE"
}

export enum ESafetyStockSettingsReturnVO_isWarning {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESafetyStockSettingsReturnVO_computeType {
    /** 按总库存计算 */
    TOTAL = "TOTAL",
    /** 按可用库存计算 */
    CAN_USE = "CAN_USE"
}
