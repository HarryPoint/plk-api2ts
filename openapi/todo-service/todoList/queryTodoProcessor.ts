// TodoProcessorQueryRequestDTO
export interface ITodoProcessorQueryRequestDTO {
    // 代办ID列表
    todoIdList: number[];
}
// JSONResult«TodoProcessorQueryResponseDTO»
export interface IJSONResultTodoProcessorQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITodoProcessorQueryResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// TodoProcessorQueryResponseDTO
export interface ITodoProcessorQueryResponseDTO {
    // 代办处理人列表
    todoProcessorList: ITodoProcessorDTO[];
}
// TodoProcessorDTO
export interface ITodoProcessorDTO {
    // ID
    id: number;
    // 代办处理人ID
    userId: number;
}
