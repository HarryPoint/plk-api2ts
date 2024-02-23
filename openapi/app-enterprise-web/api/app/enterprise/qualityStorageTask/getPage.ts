import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/质检管理/getMaterialSelectorUsingPOST_4
export default function fetchMethod(data: IInspectionTaskSearchesForVO) {
    return http<IJSONResultThePageInformationInspectionTaskReturnsVO>({
        url: "/app-enterprise-web/api/app/enterprise/qualityStorageTask/getPage",
        method: "post",
        data,
    });
}
// 质检任务搜索VO
export interface IInspectionTaskSearchesForVO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 检验日期查询开始时间
    completeStartTime: string;
    // 质检分类
    qualityInspectionCategoryId: number;
    // 采购收货单编号
    purchaseWorkOrderNo: string;
    // 任务类型
    taskType: string;
    // 任务编号
    qualityStorageTaskNo: string;
    // 检验日期查询结束时间
    completeEndTime: string;
    // 检验员id
    handleUserId: number;
    // 检验位置id
    checkPositionId: number;
    // 仓位id
    qualityWarehouseId: number;
    // 物料id集
    materialIds: number[];
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«质检任务返回VO»»
export interface IJSONResultThePageInformationInspectionTaskReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IThePageInformationInspectionTaskReturnsVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«质检任务返回VO»
export interface IThePageInformationInspectionTaskReturnsVO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: ITheInspectionTaskReturnsVO[];
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
// 质检任务返回VO
export interface ITheInspectionTaskReturnsVO {
    // id
    id: number;
    // 发起部门id
    applyCombinationId: number;
    // 发起部门名称
    applyCombinationName: string;
    // 发起人id
    applyUserId: number;
    // 发起人名称
    applyUsername: string;
    // 质检任务编号
    code: string;
    // 质检分类id
    qualityInspectionCategoryId: number;
    // 质检分类名称
    qualityInspectionCategoryName: string;
    // 质检分类编号
    qualityInspectionCategoryCode: string;
    // 质检方案id
    qualityInspectionPlanId: number;
    // 质检方案名称
    qualityInspectionPlanName: string;
    // 对应物料id
    materialId: number;
    // 对应物料名称
    materialName: string;
    // 对应物料编号
    materialCode: string;
    // 对应物料版次号
    materialIssueCode: string;
    // 对应物料单位
    materialUnit: string;
    // 对应物料规格
    materialSpec: string;
    // 质检仓位id
    qualityWarehouseId: number;
    // 质检仓位名称
    qualityWarehouseName: string;
    // 质检处理人id
    handleUserId: number;
    // 质检处理人名字
    handleUserName: string;
    // 状态
    isValid: string;
    // 计划开始时间
    planBeginTime: string;
    // 任务状态
    status: string;
    // 任务状态名称
    statusDesc: string;
    // 完成时间
    completeTime: string;
    // 任务类型
    taskType: string;
    // 任务类型描述
    taskTypeDesc: string;
    // 检验位置id
    checkPositionId: number;
    // 检验位置名称
    checkPositionName: string;
    // 总质检数
    totalInspectionQuantity: number;
    // 待检数
    waitInspectionQuantity: number;
    // 已检数
    inspectionQuantity: number;
    // 创建日期
    createTime: string;
    // 关闭人
    cancelUserId: number;
    // 关闭人名称
    cancelUserName: string;
}