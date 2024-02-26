import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产事件管理相关/getPageUsingPOST_17
*/
export default function fetchMethod(data: IProduceObjectsThatHandlePagingQueries, extraOptions?: any) {
    return http<IJSONResultPagingInformationProductionHandlesPagingResponseObjects>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceHandle/getPage",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 生产处理分页查询的对象 */
export interface IProduceObjectsThatHandlePagingQueries {
    /** 当前页面 */
    pageNo: number;
    /** 生产订单号 */
    produceOrderCode: string;
    /** 分页大小 */
    pageSize: number;
    /** 排序字段集 */
    orders: IPagingSortVO[];
    /** 异常分类 */
    type: string;
    /** 提交人id */
    createUserId: number;
    /** 生产异常类型id */
    produceAbnormalCategoryId: number;
    /** 状态 */
    status: string;
    /** 操作开始时间 yyyy-MM-dd HH:mm:ss */
    beginTime: string;
    /** 批次号 */
    lotNo: string;
    /** 操作结束时间 yyyy-MM-dd HH:mm:ss */
    endTime: string;
    /** 处理人id */
    handleUserId: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column: string;
    /** undefined */
    isAsc: string;
}
/** JSONResult«分页信息«生产处理分页响应对象»» */
export interface IJSONResultPagingInformationProductionHandlesPagingResponseObjects {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IPagingInformationProductionHandlesPagingResponseObjects;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 分页信息«生产处理分页响应对象» */
export interface IPagingInformationProductionHandlesPagingResponseObjects {
    /** 当前页码 */
    pageNo: number;
    /** 分页大小 */
    pageSize: number;
    /** 总页数 */
    totalPage: number;
    /** 总的记录数 */
    totalCount: number;
    /** 分页列表 */
    list: IProductionHandlesPagingResponseObjects[];
    /** 最后页页码 */
    lastPage: number;
    /** 是否有上一页 */
    hasPreviousPage: string;
    /** 是否有下一页 */
    hasNextPage: string;
    /** 上一页页码 */
    previousPage: number;
    /** 下一页页码 */
    nextPage: number;
}
/** 生产处理分页响应对象 */
export interface IProductionHandlesPagingResponseObjects {
    /** id */
    id: number;
    /** 所属生产任务id */
    produceTaskId: number;
    /** 所属生产任务工艺路径步骤 */
    routingStep: number;
    /** 异常分类 */
    type: string;
    /** 异常分类描述 */
    typeDesc: string;
    /** 所属进出站记录id */
    moveInOutRecordId: number;
    /** 生产异常类型id */
    produceAbnormalCategoryId: number;
    /** 生产异常类型名称 */
    produceAbnormalName: string;
    /** 生产异常类型编号 */
    produceAbnormalCode: string;
    /** 标签集合 */
    tags: string[];
    /** 销售订单号 */
    salesOrderCode: string;
    /** 对应生产订单id */
    produceOrderId: number;
    /** 对应生产订单号 */
    produceOrderCode: string;
    /** 对应批次订单id */
    lotOrderId: number;
    /** 批次名称 */
    lotName: string;
    /** 批次号 */
    lotNo: string;
    /** 物料id */
    materialId: number;
    /** 物料名称 */
    materialName: string;
    /** 物料编号 */
    materialCode: string;
    /** 物料规格 */
    materialSpec: string;
    /** 对应工艺路径id */
    routingId: number;
    /** 对应工序id */
    processId: number;
    /** 对应工序名称 */
    processName: string;
    /** 对应工序编号 */
    processCode: string;
    /** 异常数量 */
    abnormalQuantity: number;
    /** 已处理数量 */
    handleQuantity: number;
    /** 待处理数量 */
    waitQuantity: number;
    /** 返工数量 */
    backQuantity: number;
    /** 报废数量 */
    scrapQuantity: number;
    /** 放行数量 */
    releaseQuantity: number;
    /** 返工工艺路径步骤id */
    backRoutingStepId: number;
    /** 返工工艺路径步骤 */
    backRoutingStep: number;
    /** 返工工序id */
    backProcessId: number;
    /** 返工工序名称 */
    backProcessName: string;
    /** 返工工序编号 */
    backProcessCode: string;
    /** 返工生产类型 */
    backProduceType: string;
    /** 返工生产类型描述 */
    backProduceTypeDesc: string;
    /** 处理时间 */
    handleTime: string;
    /** 处理人 */
    handleUserId: number;
    /** 处理人姓名 */
    handleUsername: string;
    /** 处理意见 */
    handleRemark: string;
    /** 上报图片key集合 */
    imageKeys: string;
    /** 上报图片地址集合 */
    imageUrls: string[];
    /** 描述 */
    description: string;
    /** 备注 */
    remark: string;
    /** 状态 */
    status: string;
    /** 状态描述 */
    statusDesc: string;
    /** 创建人 */
    createUserId: number;
    /** 创建人姓名 */
    createUsername: string;
    /** 创建时间 */
    createTime: string;
    /** 是否启用启用批次 */
    enableLot: string;
    /** 是否启用质量追溯 */
    enableQualityTraceability: string;
}
