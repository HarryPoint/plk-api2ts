import { get } from '@/api/http';
 
// http://47.108.139.107:16600/doc.html#/default/待办相关/getCarbonCopyInfoByWorkOrderUsingGET
export default function fetchMethod(params: { enterpriseId: number; flowPathWorkOrderId: number }) {
    return get<IJSONResultListToDoListVO['data']>({
      url: "/todo-service/todoList/getCarbonCopyInfoByWorkOrder",
      params,
    });
}
// JSONResult«List«ToDoListVO»»
export interface IJSONResultListToDoListVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IToDoListVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ToDoListVO
export interface IToDoListVO {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 所属用户id
    userId: number;
    // 待办编号
    code: string;
    // 流程处理类型
    type: string;
    // 任务开始时间
    planBeginTime: string;
    // 预计结束时间（截止时间）
    planEndTime: string;
    // 对应业务id
    businessId: number;
    // 状态
    status: string;
    // 完成时间
    completeTime: string;
    // 发起人id
    workOrderCreateUserId: number;
    // 是否超时处理
    isTimeout: string;
    // 节点处理状态描述
    flowPathNodeHandleStatus: string;
    // 工单处理状态描述
    flowPathWorkOrderHandleStatus: string;
    // 所属工单ID
    flowPathWorkOrderId: number;
    // 所属工单编号
    flowPathWorkOrderCode: string;
    // 所属流程节点id
    flowPathNodeId: number;
    // 标题
    title: string;
    // 表头
    tableHeaderList: ITableheaderdto[];
    // 表数据
    tableDataList: ITabledatadto[];
}
// TableHeaderDTO
export interface ITableheaderdto {
    // undefined
    serialNo: string;
    // undefined
    name: string;
}
// TableDataDTO
export interface ITabledatadto {
    // undefined
    serialNo: string;
    // undefined
    showValue: string;
}
