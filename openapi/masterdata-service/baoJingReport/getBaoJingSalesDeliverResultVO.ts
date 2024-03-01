import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/getBaoJingSalesDeliverResultVOUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingSalesDeliveryReportSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultBaojingSalesDeliveryReportReturnedToVO>(
        {
            url: "/masterdata-service/baoJingReport/getBaoJingSalesDeliverResultVO",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶销售发货报表搜索VO */
export interface IBaojingSalesDeliveryReportSearchVO {
    /** 业务员ID列表 */
    businessUserIdList?: string[];
    /** 客户id集 */
    customerIds?: string[];
    /** 发货日期-开始 yyyy-MM-dd HH:mm:ss */
    deliverDateBegin?: number;
    /** 发货日期-结束 yyyy-MM-dd HH:mm:ss */
    deliverDateEnd?: number;
    /** 需求日期-开始 yyyy-MM-dd HH:mm:ss */
    demandDateBegin?: number;
    /** 需求日期-结束 yyyy-MM-dd HH:mm:ss */
    demandDateEnd?: number;
    /** 产品id集 */
    majorDataIds?: string[];
    /** 产品名称 */
    majorDataName?: string;
    /** 物料类型 */
    materialTypes?: string[];
    /** 单据类型 */
    orderType?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 外部编码产品id集 */
    outerCodeMajorDataIds?: string[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 销售订单编号 */
    salesOrderNo?: string;
    /** 运单号 */
    trackNo?: string;
    /** 单据号 */
    workOrderNo?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«宝晶销售发货报表返回VO» */
export interface IJSONResultBaojingSalesDeliveryReportReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IBaojingSalesDeliveryReportReturnedToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 宝晶销售发货报表返回VO */
export interface IBaojingSalesDeliveryReportReturnedToVO {
    /** 业务员维度 */
    businessUser?: IBaojingSalesDeliveryReportChartReturnedToVO[];
    /** 客户维度 */
    customer?: IBaojingSalesDeliveryReportChartReturnedToVO[];
    /** 送货量维度 */
    delivery?: IBaojingSalesDeliveryReportChartTimeReturnVO[];
    /** 产品维度 */
    majorData?: IBaojingSalesDeliveryReportChartReturnedToVO[];
    /** 数据表 */
    tablePage?: IPaginationInformationBaojingSalesDeliveryReportFormReturnsToVO;
    /** 材质维度 */
    texture?: IBaojingSalesDeliveryReportChartReturnedToVO[];
}
/** 宝晶销售发货报表图表返回VO */
export interface IBaojingSalesDeliveryReportChartReturnedToVO {
    /** 数量 */
    quantity?: number;
    /** 比例 */
    ratio?: number;
    /** x轴名称 */
    title?: string;
}
/** 宝晶销售发货报表图表时间返回VO */
export interface IBaojingSalesDeliveryReportChartTimeReturnVO {
    /** 数量 */
    quantity?: number;
    /** 比例 */
    ratio?: number;
    /** 时间 */
    time?: number;
}
/** 分页信息«宝晶销售发货报表表格返回VO» */
export interface IPaginationInformationBaojingSalesDeliveryReportFormReturnsToVO {
    /** 是否有下一页 */
    hasNextPage?: EPaginationInformationBaojingSalesDeliveryReportFormReturnsToVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPaginationInformationBaojingSalesDeliveryReportFormReturnsToVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IBaojingSalesDeliveryReportFormReturnedToVO[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
}
/** 宝晶销售发货报表表格返回VO */
export interface IBaojingSalesDeliveryReportFormReturnedToVO {
    /** 实际送达数量 */
    actualQuantity?: number;
    /** 业务员id */
    businessUserId?: string;
    /** 业务员名称 */
    businessUserName?: string;
    /** 承运人 */
    contractor?: string;
    /** 客户id */
    customerId?: string;
    /** 客户名称 */
    customerName?: string;
    /** 发货日期 */
    deliverDate?: number;
    /** 发货地点 */
    deliveryBeginPlace?: string;
    /** 交货地点 */
    deliveryEndPlace?: string;
    /** 需求日期 */
    demandDate?: number;
    /** 需求数量 */
    demandQuantity?: number;
    /** 数据id */
    detailDataId?: string;
    /** 产品编号 */
    majorDataCode?: string;
    /** 产品id */
    majorDataId?: string;
    /** 产品名称 */
    majorDataName?: string;
    /** 产品规格 */
    majorDataSpec?: string;
    /** 产品材质 */
    majorDataTexture?: string;
    /** 单据类型 */
    orderType?: string;
    /** 包材数据列表 */
    packagingMaterialValueList?: IIdValueVO[];
    /** 包装方式 */
    packingType?: string;
    /** 备注 */
    remark?: string;
    /** 销售订单id */
    salesOrderId?: string;
    /** 销售订单编号 */
    salesOrderNo?: string;
    /** 运单号 */
    trackNo?: string;
    /** 单据编号 */
    workOrderNo?: string;
}
/** Id，值VO */
export interface IIdValueVO {
    /** id */
    id: string;
    /** 值 */
    value: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPaginationInformationBaojingSalesDeliveryReportFormReturnsToVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPaginationInformationBaojingSalesDeliveryReportFormReturnsToVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
