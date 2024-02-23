import { post } from '@/api/http';
 
// http://47.108.139.107:16500/doc.html#/default/任务班次相关/editUsingPOST_3
export default function fetchMethod(data: ITaskShiftEditDTO, params: { enterpriseId: number; userId: number }) {
    return post<IJSONResultobject['data']>({
      url: "/flow-service/flowPathShift/edit",
      data,
      params,
    });
}
// 任务班次编辑DTO
export interface ITaskShiftEditDTO {
    // id
    id: number;
    // 班次编号
    code: string;
    // 开始时间 HH:mm
    beginTime: string;
    // 班次结束时间类型
    endTimeType: string;
    // 结束时间 HH:mm
    endTime: string;
    // 员工集合
    users: IExecutiveEditorDTO[];
    // 方案名称
    planName: string;
}
// 执行人编辑DTO
export interface IExecutiveEditorDTO {
    // id
    executorId: number;
    // 执行人类型
    executorType: string;
    // 执行人系统控件类型
    executorSysType: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
