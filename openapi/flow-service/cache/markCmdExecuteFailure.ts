import { post } from '@/api/http';
 
// http://47.108.139.107:16500/doc.html#/default/缓存相关/markCmdExecuteFailureUsingPOST
export default function fetchMethod(data: IMarkCmdExecuteFailureRequestDTO) {
    return post<IJSONResultobject['data']>({
      url: "/flow-service/cache/markCmdExecuteFailure",
      data,
    });
}
// MarkCmdExecuteFailureRequestDTO
export interface IMarkCmdExecuteFailureRequestDTO {
    // undefined
    id: number;
    // undefined
    desc: string;
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
