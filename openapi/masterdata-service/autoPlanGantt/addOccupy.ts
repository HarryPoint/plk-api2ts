import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/甘特图相关/addOccupyUsingPOST
export default function fetchMethod(data: ITheOccupiedDTOWasAdded) {
    return post<IJSONResultobject['data']>({
      url: "/masterdata-service/autoPlanGantt/addOccupy",
      data,
    });
}
// 添加占用DTO
export interface ITheOccupiedDTOWasAdded {
    // 占用类型
    occupyType: string;
    // 占用工序id
    processId: number;
    // 占用开始时间
    beginTime: string;
    // 占用结束时间
    endTime: string;
    // 占用原因
    reason: string;
    // 循环次数
    loopCount: number;
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
