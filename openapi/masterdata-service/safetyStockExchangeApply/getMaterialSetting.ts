import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/安全库存变更申请相关/getMaterialSettingUsingPOST
*/
export default function fetchMethod(options: { data: ISafetyInventoryMaterialInventoryConfigurationInformationSearchVO, params: { enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultSafetyInventoryMaterialInventoryConfigurationInformationIsReturnedToVO>(
        {
            url: "/masterdata-service/safetyStockExchangeApply/getMaterialSetting",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 安全库存物料库存配置信息搜索VO */
export interface ISafetyInventoryMaterialInventoryConfigurationInformationSearchVO {
    /** 设置类型 */
    type: ESafetyInventoryMaterialInventoryConfigurationInformationSearchVO_type;
    /** 对应业务id */
    businessId?: string;
    /** 物料id */
    materialId?: string;
}
/** JSONResult«安全库存物料库存配置信息返回VO» */
export interface IJSONResultSafetyInventoryMaterialInventoryConfigurationInformationIsReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ISafetyInventoryMaterialInventoryConfigurationInformationIsReturnedToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 安全库存物料库存配置信息返回VO */
export interface ISafetyInventoryMaterialInventoryConfigurationInformationIsReturnedToVO {
    /** 安全库存下限 */
    lowerLimit?: number;
    /** 安全库存上限 */
    upperLimit?: number;
    /** 采购触发下限 */
    purchaseLowerLimit?: number;
}

export enum ESafetyInventoryMaterialInventoryConfigurationInformationSearchVO_type {
    /** 全工厂 */
    ALL = "ALL",
    /** 区域 */
    AREA = "AREA",
    /** 仓库 */
    STOREHOUSE = "STOREHOUSE",
    /** 仓位 */
    WAREHOUSE = "WAREHOUSE"
}
