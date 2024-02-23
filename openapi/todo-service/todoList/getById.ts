import { http } from '@/api/http';

// http://47.108.139.107:16600/doc.html#/default/待办相关/getByIdUsingGET
export default function fetchMethod(params: { id: number }) {
    return http<IJSONResultToDoListDTO>({
        url: "/todo-service/todoList/getById",
        method: "get",
        params,
    });
}
// JSONResult«ToDoListDTO»
export interface IJSONResultToDoListDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IToDoListDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ToDoListDTO
export interface IToDoListDTO {
    // id
    id: number;
    // 所属用户id
    userId: number;
    // 待办编号
    code: string;
    // 流程处理类型
    type: string;
    // 任务开始时间
    planBeginTime: string;
    // 预计结束时间
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
    // 所属工单业务ID(具体数据id)
    flowPathWorkOrderBusinessId: number;
    // 所属流程节点id
    flowPathNodeId: number;
    // 工单状态
    flowPathWorkOrderStatus: string;
    // 流程id
    flowPathId: number;
    // 流程名称
    flowPathName: string;
    // 节点名称
    flowPathNodeName: string;
    // 是否能跳转
    canRedirect: string;
    // pc端跳转路径
    webPath: string;
    // 移动端跳转路径
    mobilePath: string;
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
