import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/安全库存相关/onOffMaterialUsingPOST
*/
export default function fetchMethod(options: { data: ISafetyStockMaterialSwitchWarning }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/safetyStock/onOffMaterial",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 安全库存物料开关预警 */
export interface ISafetyStockMaterialSwitchWarning {
    /** 设置类型 */
    type: ESafetyStockMaterialSwitchWarning_type;
    /** 对应业务id */
    businessId?: string;
    /** 物料id */
    materialId: string;
    /** 是否开启预警 */
    isWarning?: ESafetyStockMaterialSwitchWarning_isWarning;
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

export enum ESafetyStockMaterialSwitchWarning_type {
    /** 全工厂 */
    ALL = "ALL",
    /** 区域 */
    AREA = "AREA",
    /** 仓库 */
    STOREHOUSE = "STOREHOUSE",
    /** 仓位 */
    WAREHOUSE = "WAREHOUSE"
}

export enum ESafetyStockMaterialSwitchWarning_isWarning {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
