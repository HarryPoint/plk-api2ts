import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/自动排产订单相关/autoInsertOrderComputeUsingPOST
export default function fetchMethod(data: IProductionOrderAutomaticInsertionDTO, params: { enterpriseId: number }) {
    return post<IJSONResultSchedulingResultVO['data']>({
      url: "/masterdata-service/autoPlan/autoInsertOrderCompute",
      data,
      params,
    });
}
// 生产订单自动插单DTO
export interface IProductionOrderAutomaticInsertionDTO {
    // 待排产订单id集
    waitProduceOrderIds: number[];
    // 是否正向排产
    isAsc: string;
    // 是否倒序排产
    isDesc: string;
    // 是否考虑自动提前
    isAutoMoveUp: string;
    // 插单类型
    insertOrderType: string;
    // 插单时间 yyyy-MM-dd HH:mm:ss
    insertTime: string;
    // 插单生产订单id
    insertProduceOrderId: number;
    // 插单位置
    insertOrderPosition: string;
}
// JSONResult«排产计算结果VO»
export interface IJSONResultSchedulingResultVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ICalculationResultOfSchedulingVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 排产计算结果VO
export interface ICalculationResultOfSchedulingVO {
    // 正向排产结果分析
    ascAnalysis: ITheResultsOfSchedulingCalculationWereAnalyzedVO;
    // 倒序排产结果分析
    descAnalysis: ITheResultsOfSchedulingCalculationWereAnalyzedVO;
    // 正向排产结果
    ascList: IUnscheduledProductionOrdersAreReturnedToVO[];
    // 倒序排产结果
    descList: IUnscheduledProductionOrdersAreReturnedToVO[];
    // 正向顺延订单
    ascPostponeList: IUnscheduledProductionOrdersAreReturnedToVO[];
    // 倒序顺延订单
    descPostponeList: IUnscheduledProductionOrdersAreReturnedToVO[];
}
// 排产计算结果分析VO
export interface ITheResultsOfSchedulingCalculationWereAnalyzedVO {
    // 排产方式
    autoPlanType: string;
    // 是否按期交付
    isOnTime: string;
    // 影响订单个数
    affectOrderCount: number;
    // 超期订单个数
    overdueOrderCount: number;
    // 超期原因类型集
    overdueTypes: string[];
    // 超期原因分析集
    overdueReasons: string[];
    // 还需增加工时(小时)
    needPlusTime: number;
    // 可增加工时日期集
    canPlusDays: LocalDateTime[];
}
// 未排产生产订单返回VO
export interface IUnscheduledProductionOrdersAreReturnedToVO {
    // id
    id: number;
    // 是否加急
    isEmergentOrder: string;
    // 生产订单编号
    code: string;
    // 父级订单编号
    parentProduceOrderCode: string;
    // 销售订单编号
    salesOrderCode: string;
    // 生产物料id
    materialId: number;
    // 生产物料名称
    materialName: string;
    // 生产物料编号
    materialCode: string;
    // 物料规格
    materialSpec: string;
    // 物料单位id
    materialUnitId: number;
    // 物料单位
    materialUnit: string;
    // 计划交付日期
    deliveryDate: string;
    // 订单计划开始日期
    beginTime: string;
    // 订单计划结束日期
    endTime: string;
    // 订单当前计划开始日期
    currentBeginTime: string;
    // 订单当前计划结束日期
    currentEndTime: string;
    // 订单优先级
    priorityLevel: number;
    // 工艺路径id
    routingId: number;
    // 工艺路径名称
    routingName: string;
    // 工艺路径编号
    routingCode: string;
    // 交付数量
    totalCount: number;
    // 排产状态
    planStatus: string;
    // 排产状态描述
    planStatusDesc: string;
    // 步骤集
    steps: IUnscheduledProductionOrderStepReturnToVO[];
}
// 未排产订单步骤返回VO
export interface IUnscheduledProductionOrderStepReturnToVO {
    // id
    id: number;
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
    // 准备耗时
    readyTime: number;
    // 准备时间单位
    readyTimeUnit: string;
    // 产能-生产时间
    capacityProduceTime: number;
    // 产能-时间类型
    capacityTimeType: string;
    // 产能-生产数量
    capacityProduceQuantity: number;
    // 工序计划开始日期
    beginTime: string;
    // 工序计划结束日期
    endTime: string;
    // 工序当前计划开始日期
    currentBeginTime: string;
    // 工序当前计划结束日期
    currentEndTime: string;
}
