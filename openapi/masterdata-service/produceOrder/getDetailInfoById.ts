import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产订单相关/getDetailInfoByIdUsingGET
*/
export default function fetchMethod(params: { id?: string; enterpriseId?: number }, extraOptions?: any) {
    return http<IJSONResultProductionOrderDetailsVO>(
        {
            url: "/masterdata-service/produceOrder/getDetailInfoById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«生产订单详情VO» */
export interface IJSONResultProductionOrderDetailsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionOrderDetailsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 生产订单详情VO */
export interface IProductionOrderDetailsVO {
    /** 补单数量 */
    supplementCompleteQuantity?: number;
    /** 未补单数量 */
    unSupplementCompleteQuantity?: number;
    /** 排产信息 */
    planInfoList?: IProductionOrderDetailsProductionVO[];
    /** 物料信息 */
    materialInfo?: IProductionOrderDetailsMaterialInformationVO;
    /** 子物料生产信息 */
    childMaterialList?: IProductionOrderDetailsMaterialInformationVO[];
    /** 报废补单明细 */
    produceOrderSupplementList?: IProductionOrderDetailsSupplementVO[];
}
/** 生产订单详情 - 排产VO */
export interface IProductionOrderDetailsProductionVO {
    /** 排产类型 */
    planType?: string;
    /** 计划开始时间 */
    beginTime?: string;
    /** 计划结束时间 */
    endTime?: string;
    /** 计划生产数量 */
    totalCount?: number;
    /** 计划创建时间 */
    createTime?: string;
    /** 计划人id */
    planUserId?: number;
    /** 计划人名称 */
    planUsername?: string;
    /** 任务下发时间 */
    issueTime?: string;
    /** 任务下发人id */
    issueUserId?: number;
    /** 任务下发人名称 */
    issueUsername?: string;
    /** 状态 */
    orderStatus?: string;
    /** 生产订单id */
    produceOrderId?: number;
}
/** 生产订单详情 - 物料信息VO */
export interface IProductionOrderDetailsMaterialInformationVO {
    /** 物料id */
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 物料单位id */
    materialUnitId?: number;
    /** 物料单位名称 */
    materialUnitName?: string;
    /** 物料单位编号 */
    materialUnitCode?: string;
    /** 生产工艺工艺路径id */
    produceTechnologyRoutingId?: number;
    /** 工艺路径名称 */
    routingName?: string;
    /** 工艺路径编号 */
    routingCode?: string;
    /** 物料BOM bomid */
    produceTechnologyMaterialBomId?: number;
    /** 物料BOM 名称 */
    materialBomName?: string;
    /** 物料BOM 编号 */
    materialBomCode?: string;
    /** 物料BOM 层级 */
    materialBomLevel?: number;
    /** 计划生产数量 */
    totalCount?: number;
    /** 当前生产数量 */
    currentCount?: number;
    /** 当前累积报废数量 */
    currentScrapCount?: number;
    /** 计划开始时间 */
    beginTime?: string;
    /** 计划结束时间 */
    endTime?: string;
    /** 生产订单id */
    produceOrderId?: number;
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 子物料信息 */
    childMaterialList?: IProductionOrderDetailsMaterialInformationVO[];
    /** 生产工艺id */
    produceTechnologyId?: number;
    /** 生产工艺名称 */
    produceTechnologyName?: string;
    /** 标准工艺id */
    standardTechnologyId?: number;
    /** 标准工艺名称 */
    standardTechnologyName?: string;
    /** 序列号方案id */
    serialNoSchemeId?: number;
    /** 批次方案id */
    lotSchemeId?: number;
    /** 启用序列号 */
    enableSerialNo?: string;
    /** 启用批次 */
    enableLot?: string;
    /** 启用批次 */
    enableQualityTraceability?: string;
}
/** 生产订单详情 - 补单VO */
export interface IProductionOrderDetailsSupplementVO {
    /** id */
    id?: number;
    /** 报废补单订单编号 */
    code?: string;
    /** 物料id */
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料BOM bomid */
    produceTechnologyMaterialBomId?: number;
    /** 物料BOM 名称 */
    materialBomName?: string;
    /** 物料BOM 编号 */
    materialBomCode?: string;
    /** 物料BOM 层级 */
    materialBomLevel?: number;
    /** 工艺路径id */
    produceTechnologyRoutingId?: number;
    /** 工艺路径名称 */
    routingName?: string;
    /** 工艺路径编号 */
    routingCode?: string;
    /** 计划生产数量 */
    totalCount?: number;
    /** 当前生产数量 */
    currentCount?: number;
    /** 计划开始时间 */
    beginTime?: string;
    /** 计划结束时间 */
    endTime?: string;
}
