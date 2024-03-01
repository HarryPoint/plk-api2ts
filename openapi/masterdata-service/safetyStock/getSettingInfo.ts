import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/安全库存相关/getSettingInfoUsingPOST
*/
export default function fetchMethod(options: { data: ISecurityStockSettingsSearchVO, params: { enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultSecurityStockSettingsReturnVO>(
        {
            url: "/masterdata-service/safetyStock/getSettingInfo",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 安全库存设置搜索VO */
export interface ISecurityStockSettingsSearchVO {
    /** 对应业务id */
    businessId?: string;
    /** 设置类型 */
    type: ESecurityStockSettingsSearchVO_type;
}
/** JSONResult«安全库存设置返回VO» */
export interface IJSONResultSecurityStockSettingsReturnVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ISafetyStockSettingsReturnVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 安全库存设置返回VO */
export interface ISafetyStockSettingsReturnVO {
    /** 计数方式 */
    computeType?: ESafetyStockSettingsReturnVO_computeType;
    /** 是否开启预警 */
    isWarning?: ESafetyStockSettingsReturnVO_isWarning;
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

export enum ESafetyStockSettingsReturnVO_computeType {
    /** 按总库存计算 */
    TOTAL = "TOTAL",
    /** 按可用库存计算 */
    CAN_USE = "CAN_USE"
}

export enum ESafetyStockSettingsReturnVO_isWarning {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
