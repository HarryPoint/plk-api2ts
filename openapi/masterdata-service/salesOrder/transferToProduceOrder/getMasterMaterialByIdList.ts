import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16700/doc.html#/default/销售订单相关/getMasterMaterialByIdListUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultListInformationAboutTheMainMaterialsOfAProductionOrder>(
        {
            url: "/masterdata-service/salesOrder/transferToProduceOrder/getMasterMaterialByIdList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«转生产订单主物料信息»» */
export interface IJSONResultListInformationAboutTheMainMaterialsOfAProductionOrder {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITransferProductionOrderMainMaterialInformation[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 转生产订单主物料信息 */
export interface ITransferProductionOrderMainMaterialInformation {
    /** 详情id */
    id?: string;
    /** 销售订单id */
    salesOrderId?: string;
    /** 销售订单名称 */
    salesOrderName?: string;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 主物料id */
    materialId?: string;
    /** 主物料名称 */
    materialName?: string;
    /** 主物料编号 */
    materialCode?: string;
    /** 主物料规格 */
    materialSpec?: string;
    /** 主物料单位 */
    materialUnit?: string;
    /** 总销售数量 */
    totalSalesQuantity?: number;
    /** 主物料库存 */
    materialStorageCount?: number;
    /** 交付数量 */
    totalCount?: number;
    /** 已转换数量 */
    convertCount?: number;
    /** 未转换数量 */
    notConvertCount?: number;
    /** 交货日期 */
    deliveryDate?: number;
    /** 层级 */
    level?: number;
    /** 优先级 */
    priorityLevel?: number;
    /** 是否紧急订单 */
    isEmergentOrder?: ETransferProductionOrderMainMaterialInformation_isEmergentOrder;
    /** 标准生产工艺可选列表 */
    standardTechnologyOptionalList?: IStandardTechnologyDTO[];
    /** 已选择标准工艺ID */
    selectedStandardTechnologyId?: string;
    /** 序列号方案id */
    serialNoSchemeId?: string;
    /** 批次方案id */
    lotSchemeId?: string;
    /** 启用序列号 */
    enableSerialNo?: ETransferProductionOrderMainMaterialInformation_enableSerialNo;
    /** 启用批次 */
    enableLot?: ETransferProductionOrderMainMaterialInformation_enableLot;
    /** 启用批次 */
    enableQualityTraceability?: ETransferProductionOrderMainMaterialInformation_enableQualityTraceability;
}
/** StandardTechnologyDTO */
export interface IStandardTechnologyDTO {
    /** 标准工艺ID */
    id?: string;
    /** 标准工艺名称 */
    name?: string;
    /** 标准工艺所属分类名称 */
    standardTechnologyCategoryName?: string;
    /** 标准工艺所属分类ID */
    standardTechnologyCategoryId?: string;
}

export enum ETransferProductionOrderMainMaterialInformation_isEmergentOrder {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETransferProductionOrderMainMaterialInformation_enableSerialNo {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETransferProductionOrderMainMaterialInformation_enableLot {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETransferProductionOrderMainMaterialInformation_enableQualityTraceability {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
