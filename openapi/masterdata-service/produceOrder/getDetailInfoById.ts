import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产订单相关/getDetailInfoByIdUsingGET
*/
export default function fetchMethod(options: { params: { id?: string; enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultProductionOrderDetailsVO>(
        {
            url: "/masterdata-service/produceOrder/getDetailInfoById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«生产订单详情VO» */
export interface IJSONResultProductionOrderDetailsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProductionOrderDetailsVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产订单详情VO */
export interface IProductionOrderDetailsVO {
    /** 子物料生产信息 */
    childMaterialList?: IProductionOrderDetailsMaterialInformationVO[];
    /** 物料信息 */
    materialInfo?: IProductionOrderDetailsMaterialInformationVO;
    /** 排产信息 */
    planInfoList?: IProductionOrderDetailsProductionVO[];
    /** 报废补单明细 */
    produceOrderSupplementList?: IProductionOrderDetailsSupplementVO[];
    /** 补单数量 */
    supplementCompleteQuantity?: number;
    /** 未补单数量 */
    unSupplementCompleteQuantity?: number;
}
/** 生产订单详情 - 物料信息VO */
export interface IProductionOrderDetailsMaterialInformationVO {
    /** 计划开始时间 */
    beginTime?: number;
    /** 子物料信息 */
    childMaterialList?: IProductionOrderDetailsMaterialInformationVO[];
    /** 当前生产数量 */
    currentCount?: number;
    /** 当前累积报废数量 */
    currentScrapCount?: number;
    /** 启用批次 */
    enableLot?: EProductionOrderDetailsMaterialInformationVO_enableLot;
    /** 启用批次 */
    enableQualityTraceability?: EProductionOrderDetailsMaterialInformationVO_enableQualityTraceability;
    /** 启用序列号 */
    enableSerialNo?: EProductionOrderDetailsMaterialInformationVO_enableSerialNo;
    /** 计划结束时间 */
    endTime?: number;
    /** 批次方案id */
    lotSchemeId?: string;
    /** 物料BOM 编号 */
    materialBomCode?: string;
    /** 物料BOM 层级 */
    materialBomLevel?: number;
    /** 物料BOM 名称 */
    materialBomName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 物料单位编号 */
    materialUnitCode?: string;
    /** 物料单位id */
    materialUnitId?: string;
    /** 物料单位名称 */
    materialUnitName?: string;
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 生产订单id */
    produceOrderId?: string;
    /** 生产工艺id */
    produceTechnologyId?: string;
    /** 物料BOM bomid */
    produceTechnologyMaterialBomId?: string;
    /** 生产工艺名称 */
    produceTechnologyName?: string;
    /** 生产工艺工艺路径id */
    produceTechnologyRoutingId?: string;
    /** 工艺路径编号 */
    routingCode?: string;
    /** 工艺路径名称 */
    routingName?: string;
    /** 序列号方案id */
    serialNoSchemeId?: string;
    /** 标准工艺id */
    standardTechnologyId?: string;
    /** 标准工艺名称 */
    standardTechnologyName?: string;
    /** 计划生产数量 */
    totalCount?: number;
}
/** 生产订单详情 - 排产VO */
export interface IProductionOrderDetailsProductionVO {
    /** 计划开始时间 */
    beginTime?: number;
    /** 计划创建时间 */
    createTime?: number;
    /** 计划结束时间 */
    endTime?: number;
    /** 任务下发时间 */
    issueTime?: number;
    /** 任务下发人id */
    issueUserId?: string;
    /** 任务下发人名称 */
    issueUsername?: string;
    /** 状态 */
    orderStatus?: EProductionOrderDetailsProductionVO_orderStatus;
    /** 排产类型 */
    planType?: EProductionOrderDetailsProductionVO_planType;
    /** 计划人id */
    planUserId?: string;
    /** 计划人名称 */
    planUsername?: string;
    /** 生产订单id */
    produceOrderId?: string;
    /** 计划生产数量 */
    totalCount?: number;
}
/** 生产订单详情 - 补单VO */
export interface IProductionOrderDetailsSupplementVO {
    /** 计划开始时间 */
    beginTime?: number;
    /** 报废补单订单编号 */
    code?: string;
    /** 当前生产数量 */
    currentCount?: number;
    /** 计划结束时间 */
    endTime?: number;
    /** id */
    id?: string;
    /** 物料BOM 编号 */
    materialBomCode?: string;
    /** 物料BOM 层级 */
    materialBomLevel?: number;
    /** 物料BOM 名称 */
    materialBomName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料BOM bomid */
    produceTechnologyMaterialBomId?: string;
    /** 工艺路径id */
    produceTechnologyRoutingId?: string;
    /** 工艺路径编号 */
    routingCode?: string;
    /** 工艺路径名称 */
    routingName?: string;
    /** 计划生产数量 */
    totalCount?: number;
}

export enum EProductionOrderDetailsMaterialInformationVO_enableLot {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionOrderDetailsMaterialInformationVO_enableQualityTraceability {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionOrderDetailsMaterialInformationVO_enableSerialNo {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionOrderDetailsProductionVO_orderStatus {
    /** 已创建 */
    CREATED = "CREATED",
    /** 已排产 */
    PLAN = "PLAN",
    /** 已下发 */
    ISSUE = "ISSUE",
    /** 生产中 */
    PRODUCE = "PRODUCE",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE",
    /** 部分完成 */
    PART_COMPLETE = "PART_COMPLETE",
    /** 已完成 */
    COMPLETE = "COMPLETE"
}

export enum EProductionOrderDetailsProductionVO_planType {
    /** 自动排产 */
    AUTO = "AUTO",
    /** 手动排产 */
    HAND = "HAND",
    /** 模糊排产 */
    VAGUE = "VAGUE"
}
