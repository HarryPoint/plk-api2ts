import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/已排产订单相关/getPlanedProduceOrderUsingPOST
*/
export default function fetchMethod(options: { data: IProcessDataBaseSearchVO }, extraOptions?: any) {
    return http<IJSONResultPageInformationDynamicExpansionDataVOScheduledProductionOrdersReturnedToVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/planed/getPlanedProduceOrder",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 流程数据基础搜索VO */
export interface IProcessDataBaseSearchVO {
    /** 全局搜索 */
    allSearch?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 字段搜索 */
    dataSearchList?: IProcessDataDetailsSearchVO[];
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 明细表表code，传值后，将会查询明细表数据 */
    tableColumnCode?: string;
    /** 当前的表单分组 */
    currentFormDataGrouping?: IFormDataGroupingDTO;
}
/** 流程数据明细搜索VO */
export interface IProcessDataDetailsSearchVO {
    /** 列code */
    code: string;
    /** 搜索类型 */
    searchType: string;
    /** 搜索文本 - 针对文本搜索 */
    text?: string;
    /** 搜索起始值 - 针对范围搜索 */
    limitBegin?: Record<string, any>;
    /** 搜索结束值 - 针对范围搜索 */
    limitEnd?: Record<string, any>;
    /** 搜索选项值 - 针对选择搜索 */
    selectors?: Record<string, any>[];
    /** 表格编码 */
    tableCode?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: string;
}
/** 表单数据分组DTO */
export interface IFormDataGroupingDTO {
    /** 分组字段序列 */
    groupingFieldSerialNo?: string;
    /** 分组字段编码 */
    groupFieldCode?: string;
    /** 分组的值， 如果是关联表单，则是ID */
    groupingValue?: string;
    /** 分组名称 */
    groupingName?: string;
    /** 下级分组 */
    children?: IFormDataGroupingDTO[];
    /** 级联表单数据，  级联表单的上下级关系  - Y, 多字段分组关系 - N */
    cascadeFormData?: string;
    /** 多级基础数据上级ID */
    treeDataParentId?: number;
}
/** JSONResult«分页信息«动态拓展数据VO«已排产生产订单返回VO»»» */
export interface IJSONResultPageInformationDynamicExpansionDataVOScheduledProductionOrdersReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationDynamicExpansionDataVOScheduledProductionOrdersAreReturnedToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«动态拓展数据VO«已排产生产订单返回VO»» */
export interface IPageInformationDynamicExpansionDataVOScheduledProductionOrdersAreReturnedToVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IDynamicExpansionDataVOScheduledProductionOrderReturnedToVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: string;
    /** 是否有下一页 */
    hasNextPage?: string;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 动态拓展数据VO«已排产生产订单返回VO» */
export interface IDynamicExpansionDataVOScheduledProductionOrderReturnedToVO {
    /** 拓展数据 */
    ext?: ITheScheduledProductionOrderIsReturnedToVO;
    /** 动态数据 */
    data?: Record<string, Record<string, any>>;
}
/** 已排产生产订单返回VO */
export interface ITheScheduledProductionOrderIsReturnedToVO {
    /** 生产计划id */
    producePlanId?: number;
    /** 生产计划名称 */
    producePlanName?: string;
    /** 排产类型 */
    planType?: string;
    /** 是否锁定 */
    isLock?: string;
    /** 步骤集【自动排产、模糊排产的信息回显在这里面】 */
    steps?: IScheduledProductionOrderStepReturnToVO[];
    /** 手动排产按日排产明细 */
    dayQuantities?: IProductionOrderManualSchedulingVODailyScheduling[];
    /** 手动排产按班次排产明细 */
    classShiftQuantities?: IManualProductionSchedulingOfProductionOrdersVOByShift[];
}
/** 已排产订单步骤返回VO */
export interface IScheduledProductionOrderStepReturnToVO {
    /** id */
    id?: number;
    /** 工序id */
    processId?: number;
    /** 工序名称 */
    processName?: string;
    /** 工序编号 */
    processCode?: string;
    /** 产能 */
    capacity?: IProduceTechnologyCapacityResponseDTO;
    /** 工序计划开始日期 */
    beginTime?: string;
    /** 工序计划结束日期 */
    endTime?: string;
    /** 按日排产明细 */
    dayQuantities?: IProductionOrderManualSchedulingVODailyScheduling[];
    /** 按班次排产明细 */
    classShiftQuantities?: IManualProductionSchedulingOfProductionOrdersVOByShift[];
}
/** ProduceTechnologyCapacityResponseDTO */
export interface IProduceTechnologyCapacityResponseDTO {
    /** 创建用户ID */
    createUserId?: number;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: number;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: number;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新用户ID */
    updateUserId?: number;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 产能编号 */
    code?: string;
    /** 产能名称 */
    name?: string;
    /** 准备耗时 */
    readyTime?: number;
    /** 准备时间单位 */
    readyTimeUnit?: string;
    /** 生产耗时 */
    capacityProduceTime?: number;
    /** 生产时间单位 */
    capacityTimeType?: string;
    /** 产出数量 */
    capacityProduceQuantity?: number;
}
/** 生产订单手动排产按日排产VO */
export interface IProductionOrderManualSchedulingVODailyScheduling {
    /** 日期 */
    scheduleDate?: string;
    /** 产量 */
    quantity?: number;
}
/** 生产订单手动排产按班次排产VO */
export interface IManualProductionSchedulingOfProductionOrdersVOByShift {
    /** 日期 */
    scheduleDate?: string;
    /** 班次产量集 */
    classShifts?: IProductionPerShiftVO[];
}
/** 班次产量VO */
export interface IProductionPerShiftVO {
    /** 班次id */
    classShiftId?: number;
    /** 产量 */
    quantity?: number;
}
