import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/自动排产甘特图相关/getProcessUsingPOST
export default function fetchMethod(data: IGanttChartSearchVO, extraOptions?: any) {
    return http<IJSONResultProcedureGanttChartReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/autoPlanGantt/getProcess",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 甘特图搜索VO
export interface IGanttChartSearchVO {
    // 开始日期 yyyy-MM-dd
    beginDate: string;
    // 当前页面
    pageNo: number;
    // 结束日期 yyyy-MM-dd
    endDate: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 生产订单编码
    produceOrderCode: string;
    // 工艺路径ID列表
    processIdList: number[];
    // 销售订单编码
    salesOrderCode: string;
    // 生产物料ID列表
    produceMaterialIdList: number[];
    // 订单状态列表
    orderStatusList: string[];
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«工序甘特图返回VO»
export interface IJSONResultProcedureGanttChartReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProcedureGanttChartReturnsVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工序甘特图返回VO
export interface IProcedureGanttChartReturnsVO {
    // 全局时间占用集
    timeOccupies: IOccupiedReturnVO[];
    // 工序分页信息
    process: IPagingInformationOperationScheduleReturnsVO;
}
// 占用返回VO
export interface IOccupiedReturnVO {
    // 排期id
    id: number;
    // 占用工序
    processId: number;
    // 占用工序名称
    processName: string;
    // 占用工序编号
    processCode: string;
    // 占用时间 开始
    beginTime: string;
    // 占用时间 结束
    endTime: string;
    // 占用原因
    reason: string;
    // 排期类型
    scheduleType: string;
}
// 分页信息«工序排期返回VO»
export interface IPagingInformationOperationScheduleReturnsVO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: ITheOperationIsScheduledToReturnToVO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 工序排期返回VO
export interface ITheOperationIsScheduledToReturnToVO {
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
    // 占用时间集
    occupyTimes: IOccupiedReturnVO[];
    // 订单集
    produceOrderTimes: IProductionOrderTimeBackToVO[];
}
// 生产订单时间返回VO
export interface IProductionOrderTimeBackToVO {
    // 排期id
    scheduleId: number;
    // 生产订单id
    produceOrderId: number;
    // 生产订单号
    produceOrderCode: string;
    // 生产订单状态
    orderStatus: string;
    // 交付数量
    totalCount: number;
    // 已生产数量
    currentCount: number;
    // 交付日期
    deliveryDate: string;
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
    // 计划开始时间
    beginTime: string;
    // 计划结束时间
    endTime: string;
    // 应用ID - 工序甘特图 代表 工序ID， 销售订单，则代表销售订单明细ID
    refId: number;
    // 是否锁定
    isLock: string;
    // 排期类型
    scheduleType: string;
    // 生产任务状态
    produceTaskStatus: string;
}
